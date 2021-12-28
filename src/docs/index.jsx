import React from 'react';
import { render } from 'react-dom';
import Fetecher from './../lib/index';

Fetecher.install('');

const defaultDataset = {
	name: '徐及紅',
	year: '2022',
	city: '台北市',
	mobile: '0912345678',
	email: 'name@host.com',
};

Fetecher.post('/dna_save', defaultDataset).then((e) => {
	console.log(e);
});

function Demo() {
	return <></>;
}

render(<Demo />, document.getElementById('app'));
