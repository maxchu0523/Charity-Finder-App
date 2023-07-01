import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNonProfit } from '../api';
import { NonprofitDetail } from '../interface'
import {addFavouriteNonprofit, removeFavouriteNonprofit} from "../redux/reducer"
import { useDispatch } from 'react-redux';


const CharityDetail = (props: any) => {
    const { ein } = useParams();
    const dispatch = useDispatch()
    let [nonprofitDetail, setNonprofitDetail] = useState<NonprofitDetail>();

    useEffect(() => {
        if (ein) {
            getNonProfit(ein).then(result => {
                setNonprofitDetail(result.nonprofit);
                // setNonprofitTags(result.nonprofitTags);
            });
        }
    }, []);


    return (
        <>
            <h1>Charity Details</h1>
            <div>
                <strong>Name:</strong>
                <p id="name">{nonprofitDetail?.name}</p>
                <strong>Description:</strong>
                <p id="description">{nonprofitDetail?.descriptionLong}</p>
                <button onClick={() => dispatch(addFavouriteNonprofit(nonprofitDetail))} type="button">Add to favourite</button>
                <button onClick={() => dispatch(removeFavouriteNonprofit(nonprofitDetail))} type="button">Remove from favourite</button>
            </div>
        </>
    )
}

export default CharityDetail;