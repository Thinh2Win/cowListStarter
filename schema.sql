DROP DATABASE IF EXISTS cowcow;

CREATE DATABASE cowcow;

USE cowcow;

CREATE TABLE cows (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  cow VARCHAR(25) NOT NULL,
  about VARCHAR(250) NOT NULL
)

-- [
--   {cow: 'Buttercup',
--   about: 'a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock.'
--   },
--   {cow: 'Milkshake',
--   about: 'a cold drink made of milk, a sweet flavoring such as fruit or chocolate, and typically ice cream, whisked until it is frothy.'
--   },
--   {cow: 'Bessie',
--   about: 'a persons best or closest friend.'
--   },
--   {cow: 'MooDonna',
--   about: 'archaic : lady -- used as a form of respectful address..'
--   },
--   {cow: 'MooLawn',
--   about: 'a legendary Chinese warrior from the Northern and Southern dynasties period (420-589) of Chinese history.'
--   }
-- ]

