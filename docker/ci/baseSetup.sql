/**
* Creating the base setup for the Docker Doppler database.
* This script creates the Doppler database and the necessary tables.
* It also creates a user with the necessary permissions to access the database.
*/

-- Create the Docker Doppler database
CREATE SCHEMA IF NOT EXISTS radar;

CREATE TABLE IF NOT EXISTS radar.locations (
    id SERIAL PRIMARY KEY,
    radar_id VARCHAR(4) NOT NULL,
    name VARCHAR(64) NOT NULL,
    state SMALLINT NOT NULL,
    latitude REAL NOT NULL,
    longitude REAL NOT NULL,
    elevation REAL NOT NULL,
    type SMALLINT DEFAULT 1,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

/*
INSERT INTO radar.locations (radar_id, name, latitude, longitude, elevation, type, description) VALUES 
("KSHV", "Shreveport", 32.45083, -93.84124, 83.21, 1, "Shreveport, LA WSR-88D"),
("TMSP", "Minneapolis", 44.871, -92.933, 341.68078, 2, "Minneapolis, MN TDWR"),
("KBGM", "Binghamton", 42.1996899, -75.98472, 489.51, 1, "Binghamton, NY WSR-88D");
*/

CREATE TABLE IF NOT EXISTS radar.type (
    id SERIAL PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO radar.type (name, description) VALUES
('WSR-88D', 'Doppler radar'),
('TDWR', 'Terminal Doppler Weather Radar'),
('NEXRAD', 'Next Generation Weather Radar'),
('ASR', 'Airport Surveillance Radar'),
('ARSR', 'Air Route Surveillance Radar'),
('MRMS', 'Multi-Radar Multi-Sensor'),
('MDA', 'Meteorological Data Acquisition'),
('MDCRS', 'Meteorological Data Collection and Reporting System'),
('MDCRS-2', 'Meteorological Data Collection and Reporting System 2');

CREATE TABLE IF NOT EXISTS radar.states (
    id SERIAL PRIMARY KEY,
    name VARCHAR(16) NOT NULL,
    abbreviation VARCHAR(2) NOT NULL
)

INSERT INTO states (name, abbreviation) VALUES
('Alabama', 'AL'),
('Alaska', 'AK'),
('Arizona', 'AZ'),
('Arkansas', 'AR'),
('California', 'CA'),
('Colorado', 'CO'),
('Connecticut', 'CT'),
('Delaware', 'DE'),
('Florida', 'FL'),
('Georgia', 'GA'),
('Hawaii', 'HI'),
('Idaho', 'ID'),
('Illinois', 'IL'),
('Indiana', 'IN'),
('Iowa', 'IA'),
('Kansas', 'KS'),
('Kentucky', 'KY'),
('Louisiana', 'LA'),
('Maine', 'ME'),
('Maryland', 'MD'),
('Massachusetts', 'MA'),
('Michigan', 'MI'),
('Minnesota', 'MN'),
('Mississippi', 'MS'),
('Missouri', 'MO'),
('Montana', 'MT'),
('Nebraska', 'NE'),
('Nevada', 'NV'),
('New Hampshire', 'NH'),
('New Jersey', 'NJ'),
('New Mexico', 'NM'),
('New York', 'NY'),
('North Carolina', 'NC'),
('North Dakota', 'ND'),
('Ohio', 'OH'),
('Oklahoma', 'OK'),
('Oregon', 'OR'),
('Pennsylvania', 'PA'),
('Rhode Island', 'RI'),
('South Carolina', 'SC'),
('South Dakota', 'SD'),
('Tennessee', 'TN'),
('Texas', 'TX'),
('Utah', 'UT'),
('Vermont', 'VT'),
('Virginia', 'VA'),
('Washington', 'WA'),
('West Virginia', 'WV'),
('Wisconsin', 'WI'),
('Wyoming', 'WY');