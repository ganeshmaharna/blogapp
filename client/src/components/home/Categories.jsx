import React from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell,styled} from '@mui/material';
import {Link,useSearchParams} from 'react-router-dom';
import { categories } from '../../constants/data';

const StyledTable = styled(Table)`
    border: 2px solid green;
`;
const StyledButton = styled(Button)`
    margin: 20px;
    width: 85%;
    background: #6495ED;
    color: #fff;
    text-decoration: none;
`;
const StyledLink = styled(Link)`
    text-decoration:none;
    color:inherit;
`;


const Categories = () => {
  const [searchParams]=useSearchParams();
  const category = searchParams.get('category');
  return (
    <>
      <StyledLink to={`/create?category=${category || ''}`}>
        <StyledButton variant="contained">Create Blog</StyledButton>
      </StyledLink>
      
      <StyledTable>
          <TableHead>
                <TableRow>
                    <TableCell>
                       <StyledLink to='/'>
                         All Categories
                       </StyledLink> 
                    </TableCell>
                </TableRow>
          </TableHead>
          <TableBody>
              {
                categories.map(category => (
                  <TableRow key={category.id}>
                    <TableCell>
                      <StyledLink to={`/?category=${category.type}`}>
                        {category.type}
                      </StyledLink>
                    </TableCell>
                  </TableRow>
                ))
              }
          </TableBody>
      </StyledTable>
    </>
  )
}

export default Categories

