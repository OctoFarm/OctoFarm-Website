import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogService } from './blog.service';
import { BlogSchema } from './blog.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Post', schema: BlogSchema }])
  ],
  controllers: [BlogController],
  providers: [BlogService]
})
export class BlogModule {}
