import { useDispatch, useSelector } from 'react-redux';
import { selectFilters, setCategoryId } from '../redux/slices/filterSlice';

function Categories({ value }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const { categoryId } = useSelector(selectFilters);
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => dispatch(setCategoryId(i))}
            className={categoryId === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
