import { Router } from 'https://deno.land/x/oak/mod.ts';
import { sayHelloWorld, sayHello } from './helloWorldController.ts';

const router = new Router();
router.get('/', sayHelloWorld).get('/:name', sayHello);

export default router;
