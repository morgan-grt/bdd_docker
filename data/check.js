dbs = db.getMongo().getDBNames();
dbname = "weather_db";
if (dbs.includes(dbname))
{
	print("yes");
}
else
{
	print("no");
}