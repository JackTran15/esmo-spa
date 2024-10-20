import React from 'react'
import { GridArticle } from './GridArticle/GridArticle'
import { ListArticle } from './ListArticle/ListArticle'

export const FooterArticle = ({ isListView }) => {
  if(isListView) return <ListArticle/>
  
  return <GridArticle />
}
