// api/reports.js
let reports = [];

module.exports = (req, res) => {
  if (req.method === 'POST') {
    const report = req.body;
    reports.push(report);
    res.status(201).json(report);
  } else if (req.method === 'GET') {
    res.status(200).json(reports);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
