import React ,{useState} from 'react'
import { AddCategory } from './Components';
import Swal from "sweetalert2";
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {
    const [Categories, setCategories] = useState(['One punch', 'Dragon Ball']);
    const onAddCategory= (newCategory) => {
        // setCategories(Categories.push('Valorant'))

        // setCategories( [...Categories, 'Valorant']);

        if(Categories.includes(newCategory)) return;
        setCategories([ newCategory, ...Categories]);
        
        // setCategories((Cat) => [...Categories, "Valorant"]);
    }
    
  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory 
            onNewCategory={onAddCategory}
        />
        {
            Categories.map((category) =>(
                <GifGrid key={category} category={category}/>
            ))
        }
    </>
  )
}
