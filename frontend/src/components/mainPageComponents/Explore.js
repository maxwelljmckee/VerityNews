import React from 'react';
import { useParams } from 'react-router-dom';

import CategoryList from '../mainPageComponents/CategoryList';
import SourceList from './SourceList'


const Explore = () => {
  const params = useParams();
  console.log('Explore params', params);
  const categories = [
    {
      name: 'General',
      imageUrl: 'https://b.marfeelcache.com/statics/i/ps/cdn.shortpixel.ai/client/q_glossy,ret_img,w_564,h_1002/https://dailygalaxy.com/wp-content/uploads/2020/08/b4e149c26f49a0bf46f43c266e6cee13-1.jpg?width=1200&enable=upscale'
    },
    {
      name: 'Business',
      imageUrl: 'https://media.gettyimages.com/photos/generic-chart-picture-id184946860'
    },
    {
      name: 'Sports',
      imageUrl: 'https://www.foresightsports.com/sites/default/files/images/soccer%20ball%20hit%20into%20a%20goal.jpg'
    },
    {
      name: 'Health',
      imageUrl: 'https://media.springernature.com/w580h326/nature-cms/uploads/collections/2AP1TD2-b598c7937e0cb7c3ddb3d98f6d897d82.jpg'
    },
    {
      name: 'Science',
      imageUrl: 'https://aggietranscript.faculty.ucdavis.edu/wp-content/uploads/sites/445/2016/08/dna.jpg'
    },
    {
      name: 'Technology',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzCpLn7bEfkvNTpTUcemzA9r3baXciy01DBg&usqp=CAU'
    },
    {
      name: 'Entertainment',
      imageUrl: 'https://theproaudiofiles.com/wp-content/uploads/2017/10/stage-lighting.png'
    },
  ]


  return (
    <div className='main-page-component__container'>
      <CategoryList categories={categories} />
      <SourceList />
    </div>
  )
}


export default Explore;