// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// api/new-meetup
export default (req, res) => {
  // res.statusCode = 200
  // res.json({ name: 'John Doe' })
  console.log(req)
  if (req.method === "POST") {
    const data = req.body
    res.status(201).json({
      message: "Meetup inserted"
    })
  }
}
