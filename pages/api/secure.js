export default function handler(req, res) {
    res.status(403).json({ msg: 'Secure' })
}
