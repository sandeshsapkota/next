import React from 'react';


function PageContainer(props) {
    return (
        <div className="p-5">
            <h2 className={'font-bold text-3xl uppercase text-gray-900 mb-5'}> {props.title}</h2>
            <div className="card !p-5 min-h-screen">
                {props.children}
            </div>
        </div>
    );
}

export default PageContainer;