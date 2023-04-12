import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./ImageListing.css"
import { Link } from "react-router-dom";

const ImageListing = () => {
    const [picture, setPicture] = useState([]);
    const BaseUrl = "https://jsonplaceholder.typicode.com";

    const getPictureData = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/photos`);
            setPicture(response?.data);
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        getPictureData();
    }, []);

    console.log(picture);

    const imagePerRow = 3;
    const [loadMoreImg, setloadMoreImg] = useState(imagePerRow);
    const handleMoreImage = () => {
        setloadMoreImg(loadMoreImg + imagePerRow);
    };

    return (
        <>
            <Container>
                <div className="common_wapper">
                    <Row>
                        {picture?.slice(0, loadMoreImg)?.map((pictureData) => {
                            return (
                                <>
                                    <Col lg={4} className="mb-3">
                                        <Card>
                                            <div className='card-body'>
                                                <figure>
                                                    <img
                                                        src={
                                                            pictureData.thumbnailUrl
                                                        }
                                                        alt=''
                                                    />
                                                </figure>
                                                <h3 className='card-title'>
                                                    ${pictureData.title.slice(0, 20)}...
                                                </h3>
                                                <h5><b>Image Id: {pictureData.id}</b></h5>
                                                <h5><b>Album Id: {pictureData.albumId}</b></h5>

                                                <Link to={`/photos/${pictureData.id}`} className="btn btn-success ">View Full Image</Link>
                                            </div>
                                        </Card>
                                    </Col>
                                </>
                            );
                        })}
                        {loadMoreImg < picture?.length && (
                            <Button className='mt-4 loadMore_btn' onClick={handleMoreImage}>
                                Load more
                            </Button>
                        )}
                    </Row>
                </div>
            </Container>
        </>
    );
};

export default ImageListing;
