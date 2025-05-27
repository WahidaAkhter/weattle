import React from 'react';

const Notfound = () => {
    return (
        <div className='position-absolute top-50 start-50 translate-middle'>
            <img src="https://cdn-icons-png.flaticon.com/512/763/763707.png?w=740" alt="" />
            <h1 className='text-danger'>404!!!</h1>
            <h2> <span className='text-warning'> Sorry</span> your developer is sleeping........</h2>
        </div>
    );
};

export default Notfound;