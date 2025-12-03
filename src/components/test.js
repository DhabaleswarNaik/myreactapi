import React, { useState } from 'react';
import Api from './Api';
import Create from './Create';
import Delete from './Delete';
import Get from './Get';
import Post from './Post';
import Update from './Update';

const Test = () => {
    const [activeComponent, setActiveComponent] = useState(null);

    const renderComponent = () => {
        switch (activeComponent) {
            case 'Api': return <Api />;
            case 'Create': return <Create />;
            case 'Delete': return <Delete />;
            case 'Get': return <Get />;
            case 'Post': return <Post />;
            case 'Update': return <Update />;
            default: return <div>Select a component</div>;
        }
    };

    return (
        <div>
            <nav style={{ padding: '10px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
                <button onClick={() => setActiveComponent('Api')} style={{ marginRight: '10px' }}>Api</button>
                <button onClick={() => setActiveComponent('Create')} style={{ marginRight: '10px' }}>Create</button>
                <button onClick={() => setActiveComponent('Delete')} style={{ marginRight: '10px' }}>Delete</button>
                <button onClick={() => setActiveComponent('Get')} style={{ marginRight: '10px' }}>Get</button>
                <button onClick={() => setActiveComponent('Post')} style={{ marginRight: '10px' }}>Post</button>
                <button onClick={() => setActiveComponent('Update')}>Update</button>
            </nav>
            <div style={{ padding: '20px' }}>
                {renderComponent()}
            </div>
        </div>
    );
};

export default Test;
