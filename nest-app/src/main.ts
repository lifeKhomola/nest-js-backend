import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3100
  try {
    await app.listen(PORT);
    
  } catch (error) {
    console.log(error);
    
  }
  
}
bootstrap();
