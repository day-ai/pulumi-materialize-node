import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class ConnectionMysql extends pulumi.CustomResource {
    /**
     * Get an existing ConnectionMysql resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConnectionMysqlState, opts?: pulumi.CustomResourceOptions): ConnectionMysql;
    /**
     * Returns true if the given object is an instance of ConnectionMysql.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ConnectionMysql;
    /**
     * The AWS PrivateLink configuration for the MySQL database.
     */
    readonly awsPrivatelink: pulumi.Output<outputs.ConnectionMysqlAwsPrivatelink | undefined>;
    /**
     * Comment on an object in the database.
     */
    readonly comment: pulumi.Output<string | undefined>;
    readonly connectionMysqlId: pulumi.Output<string>;
    /**
     * The identifier for the connection database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or
     * `materialize` if environment variable is not set.
     */
    readonly databaseName: pulumi.Output<string | undefined>;
    /**
     * The MySQL database hostname.
     */
    readonly host: pulumi.Output<string>;
    /**
     * The identifier for the connection.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The owernship role of the object.
     */
    readonly ownershipRole: pulumi.Output<string>;
    /**
     * The MySQL database password.
     */
    readonly password: pulumi.Output<outputs.ConnectionMysqlPassword | undefined>;
    /**
     * The MySQL database port.
     */
    readonly port: pulumi.Output<number | undefined>;
    /**
     * The fully qualified name of the connection.
     */
    readonly qualifiedSqlName: pulumi.Output<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    readonly region: pulumi.Output<string>;
    /**
     * The identifier for the connection schema in Materialize. Defaults to `public`.
     */
    readonly schemaName: pulumi.Output<string | undefined>;
    /**
     * The SSH tunnel configuration for the MySQL database.
     */
    readonly sshTunnel: pulumi.Output<outputs.ConnectionMysqlSshTunnel | undefined>;
    /**
     * The client certificate for the MySQL database.. Can be supplied as either free text using `text` or reference to a
     * secret object using `secret`.
     */
    readonly sslCertificate: pulumi.Output<outputs.ConnectionMysqlSslCertificate | undefined>;
    /**
     * The CA certificate for the MySQL database.. Can be supplied as either free text using `text` or reference to a secret
     * object using `secret`.
     */
    readonly sslCertificateAuthority: pulumi.Output<outputs.ConnectionMysqlSslCertificateAuthority | undefined>;
    /**
     * The client key for the MySQL database.
     */
    readonly sslKey: pulumi.Output<outputs.ConnectionMysqlSslKey | undefined>;
    /**
     * The SSL mode for the MySQL database. Allowed values are disabled, required, verify-ca, verify-identity.
     */
    readonly sslMode: pulumi.Output<string | undefined>;
    /**
     * The MySQL database username.. Can be supplied as either free text using `text` or reference to a secret object using
     * `secret`.
     */
    readonly user: pulumi.Output<outputs.ConnectionMysqlUser>;
    /**
     * If the connection should wait for validation.
     */
    readonly validate: pulumi.Output<boolean | undefined>;
    /**
     * Create a ConnectionMysql resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectionMysqlArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ConnectionMysql resources.
 */
export interface ConnectionMysqlState {
    /**
     * The AWS PrivateLink configuration for the MySQL database.
     */
    awsPrivatelink?: pulumi.Input<inputs.ConnectionMysqlAwsPrivatelink>;
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    connectionMysqlId?: pulumi.Input<string>;
    /**
     * The identifier for the connection database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or
     * `materialize` if environment variable is not set.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The MySQL database hostname.
     */
    host?: pulumi.Input<string>;
    /**
     * The identifier for the connection.
     */
    name?: pulumi.Input<string>;
    /**
     * The owernship role of the object.
     */
    ownershipRole?: pulumi.Input<string>;
    /**
     * The MySQL database password.
     */
    password?: pulumi.Input<inputs.ConnectionMysqlPassword>;
    /**
     * The MySQL database port.
     */
    port?: pulumi.Input<number>;
    /**
     * The fully qualified name of the connection.
     */
    qualifiedSqlName?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The identifier for the connection schema in Materialize. Defaults to `public`.
     */
    schemaName?: pulumi.Input<string>;
    /**
     * The SSH tunnel configuration for the MySQL database.
     */
    sshTunnel?: pulumi.Input<inputs.ConnectionMysqlSshTunnel>;
    /**
     * The client certificate for the MySQL database.. Can be supplied as either free text using `text` or reference to a
     * secret object using `secret`.
     */
    sslCertificate?: pulumi.Input<inputs.ConnectionMysqlSslCertificate>;
    /**
     * The CA certificate for the MySQL database.. Can be supplied as either free text using `text` or reference to a secret
     * object using `secret`.
     */
    sslCertificateAuthority?: pulumi.Input<inputs.ConnectionMysqlSslCertificateAuthority>;
    /**
     * The client key for the MySQL database.
     */
    sslKey?: pulumi.Input<inputs.ConnectionMysqlSslKey>;
    /**
     * The SSL mode for the MySQL database. Allowed values are disabled, required, verify-ca, verify-identity.
     */
    sslMode?: pulumi.Input<string>;
    /**
     * The MySQL database username.. Can be supplied as either free text using `text` or reference to a secret object using
     * `secret`.
     */
    user?: pulumi.Input<inputs.ConnectionMysqlUser>;
    /**
     * If the connection should wait for validation.
     */
    validate?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a ConnectionMysql resource.
 */
export interface ConnectionMysqlArgs {
    /**
     * The AWS PrivateLink configuration for the MySQL database.
     */
    awsPrivatelink?: pulumi.Input<inputs.ConnectionMysqlAwsPrivatelink>;
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    connectionMysqlId?: pulumi.Input<string>;
    /**
     * The identifier for the connection database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or
     * `materialize` if environment variable is not set.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The MySQL database hostname.
     */
    host: pulumi.Input<string>;
    /**
     * The identifier for the connection.
     */
    name?: pulumi.Input<string>;
    /**
     * The owernship role of the object.
     */
    ownershipRole?: pulumi.Input<string>;
    /**
     * The MySQL database password.
     */
    password?: pulumi.Input<inputs.ConnectionMysqlPassword>;
    /**
     * The MySQL database port.
     */
    port?: pulumi.Input<number>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The identifier for the connection schema in Materialize. Defaults to `public`.
     */
    schemaName?: pulumi.Input<string>;
    /**
     * The SSH tunnel configuration for the MySQL database.
     */
    sshTunnel?: pulumi.Input<inputs.ConnectionMysqlSshTunnel>;
    /**
     * The client certificate for the MySQL database.. Can be supplied as either free text using `text` or reference to a
     * secret object using `secret`.
     */
    sslCertificate?: pulumi.Input<inputs.ConnectionMysqlSslCertificate>;
    /**
     * The CA certificate for the MySQL database.. Can be supplied as either free text using `text` or reference to a secret
     * object using `secret`.
     */
    sslCertificateAuthority?: pulumi.Input<inputs.ConnectionMysqlSslCertificateAuthority>;
    /**
     * The client key for the MySQL database.
     */
    sslKey?: pulumi.Input<inputs.ConnectionMysqlSslKey>;
    /**
     * The SSL mode for the MySQL database. Allowed values are disabled, required, verify-ca, verify-identity.
     */
    sslMode?: pulumi.Input<string>;
    /**
     * The MySQL database username.. Can be supplied as either free text using `text` or reference to a secret object using
     * `secret`.
     */
    user: pulumi.Input<inputs.ConnectionMysqlUser>;
    /**
     * If the connection should wait for validation.
     */
    validate?: pulumi.Input<boolean>;
}
