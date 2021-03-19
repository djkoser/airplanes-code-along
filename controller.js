module.exports = {
  getPlanes: (req, res, next) => {
    console.log('fired before if')
    const dbInstance = req.app.get("db");
    if (req.params.passenger) {
      dbInstance.get_planes([Number.parseInt(req.params.passenger)])
        .then(planes => {
          res.status(200).send(planes);
        })
        .catch(err => {
          console.log(err);
          res.status(500).send(err);
        });
    } else {
      res.status(200).send('Please Specify a Passenger Number');
    };
  },
  newPlanes: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance.new_planes()
      .then((planes) => {
        res.status(200).send(planes);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      })
  },
  clearPlanes: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance.clear_planes()
      .then((planes) => {
        res.status(200).send(planes);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      })
  },
  dropPlanes: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance.drop_planes()
      .then((planes) => {
        res.status(200).send(planes)
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err)
      })
  },
  initializePlanes: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance.initialize_airplanes()
      .then((planes) => {
        res.status(200).send(planes)
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err)
      })
  }
};