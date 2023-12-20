import {useRouteError} from 'react-router-dom';
const Error = () => {
  return (
    <div>
      <div className="error"></div>
      <p>{useRouteError().error + " : " + useRouteError().status}</p>
    </div>
  );
};

export default Error;
