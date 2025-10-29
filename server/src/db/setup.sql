-- server/db/setup.sql

DROP TABLE IF EXISTS employee CASCADE;
DROP TABLE IF EXISTS job CASCADE;
DROP TABLE IF EXISTS customer CASCADE;
DROP TABLE IF EXISTS vehicle CASCADE;

-- Employee table
CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    position VARCHAR(100) NOT NULL,
    start_date DATE NOT NULL,
    hourly_wage DECIMAL(10,2) NOT NULL,
    location_status TEXT DEFAULT 'hq' NOT NULL,
    job_id INTEGER REFERENCES job(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Customer table
CREATE TABLE customer (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Job table
CREATE TABLE job (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    job_address TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'pending' NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Vehicle table
CREATE TABLE vehicle (
    id SERIAL PRIMARY KEY,
    make VARCHAR(40) NOT NULL,
    model VARCHAR(40) NOT NULL,
    year SMALLINT NOT NULL,
    vin VARCHAR(17),
    customer_id INTEGER REFERENCES customer(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert some sample data
INSERT INTO customer (name, email, phone, address) VALUES
('Alice Brown', 'alice@email.com', '555-0123', '123 Main St'),
('Bob Wilson', 'bob@email.com', '555-0456', '456 Oak Ave');

INSERT INTO job (title, description, job_address, status) VALUES
('Job 1', 'Office renovation project', '123 Main St', 'active'),
('Job 2', 'Warehouse construction', '456 Oak Ave', 'pending');

INSERT INTO employee (name, position, start_date, hourly_wage, location_status, job_id) VALUES
('John Doe', 'Specialist', '2023-01-15', 35.00, 'hq', 2),
('Jane Smith', 'Project Manager', '2022-06-01', 45.00, 'hq', 1),
('Mike Johnson', 'Specialist', '2023-03-10', 32.00, 'hq', 1);

INSERT INTO vehicle (make, model, year, vin, customer_id) VALUES
('Toyota', 'Camry', 2020, '1HGBH41JXMN109186', 1),
('Honda', 'Civic', 2021, '2HGBH41JXMN109187', 2);