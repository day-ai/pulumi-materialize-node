import * as pulumi from "@pulumi/pulumi";
export declare class ConnectionSshTunnel extends pulumi.CustomResource {
    /**
     * Get an existing ConnectionSshTunnel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConnectionSshTunnelState, opts?: pulumi.CustomResourceOptions): ConnectionSshTunnel;
    /**
     * Returns true if the given object is an instance of ConnectionSshTunnel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ConnectionSshTunnel;
    /**
     * Comment on an object in the database.
     */
    readonly comment: pulumi.Output<string | undefined>;
    readonly connectionSshTunnelId: pulumi.Output<string>;
    /**
     * The identifier for the connection database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or <span pulumi-lang-nodejs="`materialize`" pulumi-lang-dotnet="`Materialize`" pulumi-lang-go="`materialize`" pulumi-lang-python="`materialize`" pulumi-lang-yaml="`materialize`" pulumi-lang-java="`materialize`">`materialize`</span> if environment variable is not set.
     */
    readonly databaseName: pulumi.Output<string | undefined>;
    /**
     * The host of the SSH tunnel.
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
     * The port of the SSH tunnel.
     */
    readonly port: pulumi.Output<number>;
    /**
     * The first public key associated with the SSH tunnel.
     */
    readonly publicKey1: pulumi.Output<string>;
    /**
     * The second public key associated with the SSH tunnel.
     */
    readonly publicKey2: pulumi.Output<string>;
    /**
     * The fully qualified name of the connection.
     */
    readonly qualifiedSqlName: pulumi.Output<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    readonly region: pulumi.Output<string>;
    /**
     * The identifier for the connection schema in Materialize. Defaults to <span pulumi-lang-nodejs="`public`" pulumi-lang-dotnet="`Public`" pulumi-lang-go="`public`" pulumi-lang-python="`public`" pulumi-lang-yaml="`public`" pulumi-lang-java="`public`">`public`</span>.
     */
    readonly schemaName: pulumi.Output<string | undefined>;
    /**
     * The user of the SSH tunnel.
     */
    readonly user: pulumi.Output<string>;
    /**
     * If the connection should wait for validation.
     */
    readonly validate: pulumi.Output<boolean | undefined>;
    /**
     * Create a ConnectionSshTunnel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectionSshTunnelArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ConnectionSshTunnel resources.
 */
export interface ConnectionSshTunnelState {
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    connectionSshTunnelId?: pulumi.Input<string>;
    /**
     * The identifier for the connection database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or <span pulumi-lang-nodejs="`materialize`" pulumi-lang-dotnet="`Materialize`" pulumi-lang-go="`materialize`" pulumi-lang-python="`materialize`" pulumi-lang-yaml="`materialize`" pulumi-lang-java="`materialize`">`materialize`</span> if environment variable is not set.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The host of the SSH tunnel.
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
     * The port of the SSH tunnel.
     */
    port?: pulumi.Input<number>;
    /**
     * The first public key associated with the SSH tunnel.
     */
    publicKey1?: pulumi.Input<string>;
    /**
     * The second public key associated with the SSH tunnel.
     */
    publicKey2?: pulumi.Input<string>;
    /**
     * The fully qualified name of the connection.
     */
    qualifiedSqlName?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The identifier for the connection schema in Materialize. Defaults to <span pulumi-lang-nodejs="`public`" pulumi-lang-dotnet="`Public`" pulumi-lang-go="`public`" pulumi-lang-python="`public`" pulumi-lang-yaml="`public`" pulumi-lang-java="`public`">`public`</span>.
     */
    schemaName?: pulumi.Input<string>;
    /**
     * The user of the SSH tunnel.
     */
    user?: pulumi.Input<string>;
    /**
     * If the connection should wait for validation.
     */
    validate?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a ConnectionSshTunnel resource.
 */
export interface ConnectionSshTunnelArgs {
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    connectionSshTunnelId?: pulumi.Input<string>;
    /**
     * The identifier for the connection database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or <span pulumi-lang-nodejs="`materialize`" pulumi-lang-dotnet="`Materialize`" pulumi-lang-go="`materialize`" pulumi-lang-python="`materialize`" pulumi-lang-yaml="`materialize`" pulumi-lang-java="`materialize`">`materialize`</span> if environment variable is not set.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The host of the SSH tunnel.
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
     * The port of the SSH tunnel.
     */
    port: pulumi.Input<number>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The identifier for the connection schema in Materialize. Defaults to <span pulumi-lang-nodejs="`public`" pulumi-lang-dotnet="`Public`" pulumi-lang-go="`public`" pulumi-lang-python="`public`" pulumi-lang-yaml="`public`" pulumi-lang-java="`public`">`public`</span>.
     */
    schemaName?: pulumi.Input<string>;
    /**
     * The user of the SSH tunnel.
     */
    user: pulumi.Input<string>;
    /**
     * If the connection should wait for validation.
     */
    validate?: pulumi.Input<boolean>;
}
