import React, {useState, useEffect} from 'react'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import DetailOkezone from './DetailOkezone'

const Okezone = () => {
    let match = useRouteMatch()
    const [kategori, setKategori] = useState(null)

    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    const getData = () => {
        const url = "https://berita-indo-api.vercel.app/"
        fetch(url)
        .then(res => res.json())
        .then(res => {
            // console.log(res.listApi['Tempo News'].listType)
            setKategori(res.listApi['Okezone News'].listType)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => { getData() }, [])

    return (
        <>
            <h2>Berita Okezone</h2>
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    Pilih Kategori
                </DropdownToggle>
                <DropdownMenu>
                    {(kategori && kategori.map((data,i) => (
                        <Link to={`${match.url}/${data}`}><DropdownItem key={i}>{data}</DropdownItem></Link>
                    )))}
                </DropdownMenu>
            </ButtonDropdown>
            <hr />
            <Switch>
                <Route path={`${match.path}/:category`}>
                    <DetailOkezone />
                </Route>
            </Switch>
            
        </>
    )
}

export default Okezone
