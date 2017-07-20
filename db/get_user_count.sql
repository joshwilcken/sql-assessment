select count(vehicles.make)
from vehicles
join users on users.id = vehicles.owner_id 
where users.id = $1