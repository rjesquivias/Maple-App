import { listImages } from '../graphql/queries';
import { createImage as createImageMutation, deleteImage as deleteImageMutation } from '../graphql/mutations';
import { useState, useEffect } from 'react';
import { API, Storage } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';

const initialFormState = {
    description: '',
    date: null,
    image: ''
};

const ImageUploadForm = () => {
    const [images, setImages] = useState([]);
    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => {
        fetchImages();
    }, []);

    async function onChange(e) {
        if (!e.target.files[0]) return
        const file = e.target.files[0];
        var uuid = uuidv4();
        setFormData({ ...formData, image: uuid });
        await Storage.put(uuid, file);
    }

    async function fetchImages() {
        const apiData = await API.graphql({ query: listImages });
        const imagesFromAPI = apiData.data.listImages.items;
        await Promise.all(imagesFromAPI.map(async imageFromAPI => {
            console.log(JSON.stringify(imagesFromAPI));
            if (imageFromAPI.image) {
              const image = await Storage.get(imageFromAPI.image);
              imageFromAPI.image = image;
            }
            return imageFromAPI;
        }))
        setImages(apiData.data.listImages.items);
    }

    async function createImage(e) {
        e.preventDefault();
        if (!formData.image) return;
        setFormData({ ...formData, 'date': new Date().toISOString()});
        console.log(JSON.stringify(formData));
        await API.graphql({ query: createImageMutation, variables: { input: formData } });
        if (formData.image) {
            const image = await Storage.get(formData.image);
            formData.image = image;
          }
        setImages([ ...images, formData ]);
        setFormData(initialFormState);
    }
    
    async function deleteImage({ id }) {
        const newImagesArray = images.filter(image => image.id !== id);
        setImages(newImagesArray);
        await API.graphql({ query: deleteImageMutation, variables: { input: { id } }});
    }

    return (
        <>
        <h1>Login</h1>
        <form onSubmit={(e) => createImage(e)}>
        <label>
          Image:
          <input
            type="file"
            onChange={onChange}
            />
        </label>
        <label>
            Description:
            <input
                onChange={e => setFormData({ ...formData, 'description': e.target.value})}
                placeholder="Image Description"
                value={formData.description}
            />
        </label>
        <input type="submit" value="Submit" />
        </form>
        <div style={{marginBottom: 30}}>
        {
          images.map(image => (
            <div key={image.id || image.file}>
              <h2>{image.file}</h2>
              <p>{image.description}</p>
              <button onClick={() => deleteImage(image)}>Delete image</button>
                {
                    image.image && <img src={image.image} style={{width: 400}} />
                }
            </div>
          ))
        }
        </div>
        </>
    );
};

export default ImageUploadForm;