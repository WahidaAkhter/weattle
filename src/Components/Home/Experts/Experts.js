import React from 'react';
import Expert from './Expert/Expert';

const Experts = () => {


    const experts = [
        { id: 1, name: 'Will Smith',description:"He is a professional photographer who will photograph you through this tour", img: "https://img.freepik.com/free-photo/indian-photographer-man-holding-his-camera-white-background_231208-3771.jpg?t=st=1650255027~exp=1650255627~hmac=ccd1a3692704c1f2a67b78db3aa58334fe0e431aa7b45048e93f1892f27397c1&w=1060" },
        { id: 2, name: 'Nina Rock',description:"She is your tour guide ,everyplaces you want to visit she is going to help you", img: "https://img.freepik.com/free-photo/girl-holds-tourist-map-old-town_1150-15005.jpg?t=st=1650254846~exp=1650255446~hmac=ce219b7cae37ef6e06b1f62fdd11ec5a6232bc7061fb47ad2ca8afc9e0a115e9&w=1060" },
        { id: 3, name: 'Dwayne Rock', description:"He is our special chef,through this tour you will get amazing delicious food.", img: "https://img.freepik.com/free-photo/chef-posing-with-knife-his-kitchen_155003-502.jpg?t=st=1650254898~exp=1650255498~hmac=8db0bef6fd281893ba840b14036cdb5bf8023d5c205a36a0b202d5488cd72b30&w=1060" },

    ]

    return (
        <div id="experts" className='container'>
            <h2 className='text-dark text-center mt-5'>Special <span className='text-success'>Team Member </span> </h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;