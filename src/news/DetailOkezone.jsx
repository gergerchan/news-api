import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router'
import {
    Card, CardBody, CardLink,
    CardTitle, CardSubtitle, CardImg, Col,Row, Spinner
  } from 'reactstrap';

const DetailOkezone = () => {
    let params = useParams();
    const [news, setNews] = useState(null)
    const [isLoading, setIsLoading] = useState(false);

    const baseurl=`https://berita-indo-api.vercel.app/v1/okezone-news/${params.category}`
    useEffect(() => {
        getData(baseurl)
    }, [baseurl])

    const getData = (baseurl) => {
        setIsLoading(true)
        fetch(baseurl)
        .then(res => res.json())
        .then(res => {
            // console.log(res)
            setNews(res.data)
            setIsLoading(false)
        })
        .catch(err => console.log(err))
    }

    return (
        <>
        <h1>Berita {params.category} Okezone</h1>
        <Row>
            {isLoading &&  <Col><Spinner color="dark" /></Col>}
            {!isLoading && news && news.map((data,i) => (
                <Col lg="3" key={i}>
                <Card >
                    <CardImg top width="100%" src={data.image.small} alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">{data.title}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{data.content}</CardSubtitle>
                        <CardLink href={data.link}>Menuju ke berita</CardLink>
                    </CardBody>
                </Card>
                </Col>
            ))}
            
        </Row>
        </>
    )
}

export default DetailOkezone
