SELECT vehicles.id, vehicles.make, vehicles.model, vehicles.year, vehicles.owner_id, users.name
FROM vehicles
join users
on users.id=vehicles.owner_id
where year > 1999
ORDER BY vehicles.year DESC;
