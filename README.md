# Dockppler (Docker Doppler)

An idea to create a browser version of GRLevel3 using OpenLayers.

**MINIMUM SYSTEM REQUIREMENTS (Excluding Broswer Load)**

**Production**

CPU: 3.5 threads
RAM: ~1.5GB

**Continuous Integration (CI)**

CPU: 6.5 threads
RAM: 5.25GB

## General Notes

- CI needs much more resources because of Next.JS development

- Build this system when you have a few minutes to spare. Build times on modern computers will take ~215s

- After building image, running image in container will only take a few seconds

## Prod Running Instructions

From the `./docker/prod` directory, execute `docker compose up -d`

The browser interface will be displayed on http://localhost:8090

Enjoy!

## CI Running Instructions

From the `./docker/ci` directory, execute `docker compose up`

The browser interface will be displayed on http://localhost:8080

## Dedication

I dedicate this project to my daughters Hannah and Madalynn. They have been my strength to always do the best I can every single day. I am so proud to call them my daughters <3. Love ya kiddos!

## v0.0 Ideas

- Go binary route with ftp://tgftp.nws.noaa.gov/SL.us008001/DF.of/DC.radar ???
- Use OpenLayers as base layer
- Settings interface for monitoring downloading, settings, & maybe some kind of performance monitoring?

### Need To Figure Out First

- Radar binary to format for OpenLayers
- Custom colormaps
- Smooth animating over OpenLayers map for radar.

### Front End

- NextJS
- Typescript
- TailwindCSS
- shadcn/ui

### Back End

- Postgres 17
- Python

