export const sayHelloWorld = ({ response }: { response: any }) => {
  response.statuts = 200;
  response.body = `Hello World`;
};

export const sayHello = ({ params, response }: { params: { name: string }; response: any }) => {
  response.statuts = 200;
  response.body = `Hello ${params.name}`;
};
