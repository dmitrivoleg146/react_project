show databases;
use oleg33;
select * from cars where year>2000;
select * from cars where year<2005;
select * from cars where year between  2008 and 2010;
select * from cars where year not between 2008 and 2010;
select * from cars where year=price;
select * from cars where model='bmw' and year>2014;
select * from cars where model='audi' and year<2014;
select * from cars limit 5;
select * from cars order by id desc limit 5;
select *from cars;
select * from cars where model like '_a%a_';
select * from cars where length(model)>8;

