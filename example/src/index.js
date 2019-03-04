import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../../dist/index';
import './style.css';

const Application = () => (
    <div className={'react-utils-bundle-example'}>
        <h2><code>react-utils-button</code></h2>
        <div className="row">
            <h3> - with custom <code>onClick</code> handler</h3>
            <Button value={'Click me'} onClick={() => {
                alert('Thanks!');
            }}/>
        </div>
        <div className="row">
            <h3> - with custom class</h3>
            <Button value={'Click me'} className={'my-custom-class'}/>
        </div>
        <div className="row">
            <h3> - with <code>disabled: true</code></h3>
            <Button value={'Click me'} disabled={true}/>
        </div>
        <div className="row">
            <h3> - with <code>active: true</code></h3>
            <Button value={'Click me'} active={true}/>
        </div>
        <div className="row">
            <h3> - with <code>loading: true</code> and custom loading spinner</h3>
            <Button value={'Click me'} loading={true}/>
        </div>
    </div>
);

ReactDOM.render(
    <Application/>,
    document.getElementById('app')
);
