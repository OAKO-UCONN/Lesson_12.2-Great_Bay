create database greatbay_DB;
use greatbay_DB;
create table auctions(
	id integer not null auto_increment,
    itemname varchar(50) not null,
    category varchar(50) not null,
    startingbid integer default 0,
    highestbid integer default 0,
    primary key (id)
);
