import { Col, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const DisplayList = () => {
    const items = useSelector((state) => [
        selectFeaturedCampsite(state), 
        selectFeaturedPromotion(state), 
        selectFeaturedPartner(state)
    ]);

    console.log('display items: ', items)

    return (
        <Row>
            {items.map((item, index) => {
                const { featuredItem, isLoading, errMsg } = item;
                if(isLoading) {
                    return <Loading key={index}/>
                }
                if (errMsg) {
                    return <Error errMsg={errMsg} key={index} />
                }
                return (
                    featuredItem && (
                        <Col md className='m-1' key={index}>
                            <AnimatedDisplayCard item={featuredItem} />
                        </Col>
                    )
                );
            })}
        </Row>
    )
}

export default DisplayList;