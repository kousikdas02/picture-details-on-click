import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ViewImage = () => {
    const { id } = useParams();

    const [fullImage, setFullImage] = useState([]);

    const BaseUrl = "https://jsonplaceholder.typicode.com";

    const getFullImage = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/photos/${id}`);
            setFullImage(response?.data);
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        getFullImage();
    }, []);

    console.log(fullImage);

    return (
        <>
            <Container>
                <div className='fullImg'>
                    <figure>
                        <img src={fullImage.url} alt='' />
                    </figure>
                </div>
            </Container>
        </>
    );
};

export default ViewImage;
