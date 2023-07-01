import React, { useEffect, useState } from 'react';
import './home.scss';
import { Link } from 'react-router-dom';
import { Nonprofit } from '../interface';
import { getNonProfits } from '../api';
import { useSelector } from 'react-redux';
import { FavouriteNonprofit } from '../interface';


const Home = (props: any) => {

    const favouriteNonProfits = useSelector((state: FavouriteNonprofit[]) => state);
    let [nonprofits, setNonprofits] = useState<Nonprofit[]>([]);

    useEffect(() => {
        getNonProfits("education").then(result => {
            setNonprofits(result);
        });

    }, []);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Tags</th>
                        <th>isFavourite?</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        nonprofits.length > 0 && nonprofits.map((nonprofit: Nonprofit) =>
                            <tr key={nonprofit.ein}>
                                <td>
                                    <Link to={"./charity-detail/" + nonprofit.ein} relative="path">
                                        {nonprofit.name}
                                    </Link>
                                </td>
                                <td>
                                    {nonprofit.description}
                                </td>
                                <td>
                                    {nonprofit.tags}
                                </td>
                                <td>
                                    {favouriteNonProfits.find(favouriteNonProfit => favouriteNonProfit.ein == nonprofit.ein)? "true" : "false"}
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            {JSON.stringify(favouriteNonProfits)}

        </>
    )
};
export default Home;