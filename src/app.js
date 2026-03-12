require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const authRoutes = require("./routes/auth.routes");
const serverRoutes = require("./routes/server.routes");
const deploymentRoutes = require("./routes/deployment.routes");
const metricsRoutes = require("./routes/metrics.routes");

const errorHandler = require("./middleware/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/auth",authRoutes);
app.use("/api/servers",serverRoutes);
app.use("/api/deployments",deploymentRoutes);
app.use("/api/metrics",metricsRoutes);

app.use(errorHandler);

app.listen(process.env.PORT,()=>{
    console.log(`Server running on ${process.env.PORT}`);
});