<?php

define('FS_METHOD', 'direct');

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'db756948202' );

/** MySQL database username */
define( 'DB_USER', 'dbo756948202' );

/** MySQL database password */
define( 'DB_PASSWORD', 'GuTCXRuyIXKLvZKyUVBC' );

/** MySQL hostname */
define( 'DB_HOST', 'db756948202.db.1and1.com' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'YPf3P&30g]N!3|4V((FfCxn0&f]F:a?+$Dt/^Fq-;V7MSl.$}Q}wXrhtP=B5[GDs');
define('SECURE_AUTH_KEY',  'w4knJpCJeMyo4.C)MrTjqtX}eq^9Z+rB[cQo-[TewgkJ?RKD/Vx6p<3b-@t1%Fd$');
define('LOGGED_IN_KEY',    '|Yk>uctEdo`re]m{IbedX>?~8N*F*.}?op_q{K=n+g/nxDL7$m^52Jt&)fA1-UT(');
define('NONCE_KEY',        'J<!kzr5$$$|j$?wDok-aYv$;k%<F=%3r@|1|V0-q?b`^CICuk2MlXNtjC!vwp!Ih');
define('AUTH_SALT',        'Sn pn;rDGn^0&nYQm4EiJ%^YCe?jpj0$o|I|8Qh96j{/dW k/(e?V79-sKSB^(a!');
define('SECURE_AUTH_SALT', ';A8$r B{I$~|LQX*gZ-u| U~j`/`F@K|bVKV~x2nff 6OQUY@kXx_`J I|YH^LE<');
define('LOGGED_IN_SALT',   'q[[KEJvpOD{}C0Ief~B,X7xJMT%Pq_v~?RE3m-tv{HY]Sv/UKu4X-%CLrs !VU2H');
define('NONCE_SALT',       'O)d.&%BeCd@&/V?|7[lVCdxE3wP$8hdbe^dXfSGs.Lr|^Bz`Qpx8S3BL(?+Ob.;5');


/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'ntzghUMZ';




/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
