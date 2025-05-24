# DockerDoppler

An idea to create a browser version of GRLevel3 using OpenLayers.

** Build this system when you have a few minutes to spare. Build times on modern computers will take ~215s **

** After building image, running image in container will only take a few seconds **

## Prod Running Instructions

From the `./docker/prod` directory, execute `docker compose up -d`

The browser interface will be displayed on http://localhost:8090

Enjoy!

## CI Running Instructions

From the `./docker/ci` directory, execute `docker compose up`

The browser interface will be displayed on http://localhost:8090

## v0.0 Ideas

- Go binary route with ftp://tgftp.nws.noaa.gov/SL.us008001/DF.of/DC.radar ???
- Use Next.JS 15 w/ Typescript for browser interface
- Use OpenLayers as base layer
- Settings interface for monitoring downloading, settings, & maybe some kind of performance monitoring?

### Need To Figure Out First

- Radar binary to format for OpenLayers
- Custom colormaps
- Smooth animating over OpenLayers map for radar.
