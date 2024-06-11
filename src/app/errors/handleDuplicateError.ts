import { TErrorSources, TGenericErrorResponse } from '../interface/error';

const handleDuplicteError = (err: any): TGenericErrorResponse => {
  const match = err.message.match(/"([^"]+)"/);
  const extractedMessage = match && match[1];

  const errorSources: TErrorSources = [
    {
      path: '',
      message: `'${extractedMessage}' is already exists`,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: '',
    errorSources,
  };
};

export default handleDuplicteError;
