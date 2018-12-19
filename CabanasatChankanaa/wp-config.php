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
define( 'DB_NAME', 'db728215535' );

/** MySQL database username */
define( 'DB_USER', 'dbo728215535' );

/** MySQL database password */
define( 'DB_PASSWORD', 'Password.*2018.*' );

/** MySQL hostname */
define( 'DB_HOST', 'db728215535.db.1and1.com' );

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
//define('SECURE_AUTH_KEY',  'aYMl#h+k^44|#;aOm_m;MUc4RyVByqy|rI%PhTOGf_:La)N9VKs,n3]8,$tdCYS<');
//define('LOGGED_IN_KEY',    '~35_svF,9~$jVp%3N[U%DA4zjUz,bGN$*+kRY=Jmsw$Q|.MvCY(L`.PW &:4p4c9');
//define('NONCE_KEY',        'Q@)&&|WzmM?:yPe9j>~C(-)q!)s_R</)CsBP<Zm]c@^^J3we:7*-_g+I+-iLk3d,');
//define('AUTH_SALT',        'vKtDlCpB#/6nWw1Di?|j*%WB:O>3> (oLJf1pPuIc7lT`-([!M&Q`Cj*gl<N3w*l');
//define('SECURE_AUTH_SALT', 'ml|oOx=}-..8u.-#[__CetK,%kn-elC^ECtp?7v+u4eh@|,37[(bu{ECZ-cgO@T*');
//define('LOGGED_IN_SALT',   '+UM9{|^DiPj!+Dd^B0ey`{Y0U%rZ;  ?E~9``-}&v=`n@ed#mZvV^_8<%gvNPwYM');
//define('NONCE_SALT',       '7&yw (![,Nv[dsCFoW:ezH/@A*w?dD$itHL 8^7ftTG>kSI-{iNT(Ne&W-l#K?WZ');
define('AUTH_KEY',         'j&9$S;~Z]cFAW{/},4N9D(!n{oO`H@ezOA3%:-6I!w+24tdp_Nt;J^*#<7jLW~|w');
define('SECURE_AUTH_KEY',  'vdu&p%>uu5mF;-EudhP%=~wnx<XT9IVc<9;^Y(FV3qH!MrS+;K3(_HRWAELnL)|3');
define('LOGGED_IN_KEY',    '2?Pb|iHhrpv-~]%vdl>{d!<}O+9#~CG2YV~?);~I}]en+bXIOJcM!BWe2Us{l;)k');
define('NONCE_KEY',        'E{2#(b&xC`c-!2--ehHceN|T<4an|:%y1HgZ(Jz+3u|`|#k6?ufe[+O[2|+ 0yV+');
define('AUTH_SALT',        'cT!/&A262BrlUXL$HzKmq}0h@(V(%|`(ybufDyFlqth--t=#Wdo*4%Wxi(+l+s^,');
define('SECURE_AUTH_SALT', 'I{gW$2e+U&Rfa-B1dBS=MdQc`c~iEfg106`+yMB;qB?~#Yu#V9h,^;=m%b&!}O1B');
define('LOGGED_IN_SALT',   '-P%KK+TFmud}#>{KBEoAZV8fz-H3_n(kuSf-+6^5X/Nf@56dlWh&>}{Iu.Y76VRo');
define('NONCE_SALT',       'ZFv2:<O555|^A^*wv22R=K}8AwEjD^F;^j#!>/(xo4z1OSCHOh]0LjR <-JqTL:u');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'nEOBF';




/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
