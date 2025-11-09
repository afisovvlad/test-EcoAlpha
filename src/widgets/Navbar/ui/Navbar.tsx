import { memo } from 'react';
import { NavLink } from 'react-router';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.css';

export const Navbar = memo(() => {
	return (
		<header className={cls.Navbar}>
			<NavLink to={RoutePath.products} className={cls.NavLink}>
				Список продуктов
			</NavLink>

			<NavLink to={RoutePath.create_product} className={cls.NavLink}>
				Создать продукт
			</NavLink>
		</header>
	);
});
