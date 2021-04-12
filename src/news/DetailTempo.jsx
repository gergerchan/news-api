import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router'
import { Card, CardLink, CardTitle, CardText, Row, Col, Spinner } from 'reactstrap';

const DetailTempo = () => {
    let params = useParams();
    const [news, setNews] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const baseurl=`https://berita-indo-api.vercel.app/v1/tempo-news/${params.category}`
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
        <h1>Berita {params.category} Tempo</h1>
        <Row>
            
        {isLoading &&  <Col><Spinner color="dark" /></Col>}
        {!isLoading && news && news.map((data,i) => (
            <Col lg="4" key={i}>
                <Card body>
                <CardTitle tag="h5">{data.title}</CardTitle>
                <CardText>{data.content}</CardText>
                <CardLink href={data.link}>Menuju ke berita</CardLink>
                </Card>
            </Col>
            ))}
        </Row>
        </>
    )
}

export default DetailTempo
