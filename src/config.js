const configDev = {
  ENDPOINT_URL: 'https://somedomain.com',
};


const configProd = {
  ENDPOINT_URL: 'https://somedomain.com',
};

export default process.env.NODE_ENV === 'development' ? configDev : configProd;
