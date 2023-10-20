import React from 'react';
import Card from '../components/Card';

const CardList = ({ data }) => {
    return (
        <div>

            {data.map((user, idx) => {
                return <Card
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    email={user.email} />
            })}
        </div>
    )
}

export default CardList;