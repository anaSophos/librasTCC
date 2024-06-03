type DBStarter = () => void;
type DBStarterArray = Record<string, DBStarter>;

class Loaders {
  private dbStarters: DBStarterArray;

  constructor(dbStarters: DBStarterArray) {
    this.dbStarters = dbStarters;
  }

  start() {
    for (const dbName in this.dbStarters) {
      console.log(dbName);
      const databaseFunctionStart = this.dbStarters[dbName];
      if (databaseFunctionStart !== undefined) {
        databaseFunctionStart();
      } else {
        console.log('No function found for database:' + dbName);
      }
    }
  }
}

export default Loaders;
