import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class ConnectionConfluentSchemaRegistry extends pulumi.CustomResource {
    /**
     * Get an existing ConnectionConfluentSchemaRegistry resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConnectionConfluentSchemaRegistryState, opts?: pulumi.CustomResourceOptions): ConnectionConfluentSchemaRegistry;
    /**
     * Returns true if the given object is an instance of ConnectionConfluentSchemaRegistry.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ConnectionConfluentSchemaRegistry;
    /**
     * The AWS PrivateLink configuration for the Confluent Schema Registry.
     */
    readonly awsPrivatelink: pulumi.Output<outputs.ConnectionConfluentSchemaRegistryAwsPrivatelink | undefined>;
    /**
     * Comment on an object in the database.
     */
    readonly comment: pulumi.Output<string | undefined>;
    readonly connectionConfluentSchemaRegistryId: pulumi.Output<string>;
    /**
     * The identifier for the connection database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or <span pulumi-lang-nodejs="`materialize`" pulumi-lang-dotnet="`Materialize`" pulumi-lang-go="`materialize`" pulumi-lang-python="`materialize`" pulumi-lang-yaml="`materialize`" pulumi-lang-java="`materialize`">`materialize`</span> if environment variable is not set.
     */
    readonly databaseName: pulumi.Output<string | undefined>;
    /**
     * The identifier for the connection.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The owernship role of the object.
     */
    readonly ownershipRole: pulumi.Output<string>;
    /**
     * The password for the Confluent Schema Registry.
     */
    readonly password: pulumi.Output<outputs.ConnectionConfluentSchemaRegistryPassword | undefined>;
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
     * The SSH tunnel configuration for the Confluent Schema Registry.
     */
    readonly sshTunnel: pulumi.Output<outputs.ConnectionConfluentSchemaRegistrySshTunnel | undefined>;
    /**
     * The client certificate for the Confluent Schema Registry.. Can be supplied as either free text using <span pulumi-lang-nodejs="`text`" pulumi-lang-dotnet="`Text`" pulumi-lang-go="`text`" pulumi-lang-python="`text`" pulumi-lang-yaml="`text`" pulumi-lang-java="`text`">`text`</span> or reference to a secret object using <span pulumi-lang-nodejs="`secret`" pulumi-lang-dotnet="`Secret`" pulumi-lang-go="`secret`" pulumi-lang-python="`secret`" pulumi-lang-yaml="`secret`" pulumi-lang-java="`secret`">`secret`</span>.
     */
    readonly sslCertificate: pulumi.Output<outputs.ConnectionConfluentSchemaRegistrySslCertificate | undefined>;
    /**
     * The CA certificate for the Confluent Schema Registry.. Can be supplied as either free text using <span pulumi-lang-nodejs="`text`" pulumi-lang-dotnet="`Text`" pulumi-lang-go="`text`" pulumi-lang-python="`text`" pulumi-lang-yaml="`text`" pulumi-lang-java="`text`">`text`</span> or reference to a secret object using <span pulumi-lang-nodejs="`secret`" pulumi-lang-dotnet="`Secret`" pulumi-lang-go="`secret`" pulumi-lang-python="`secret`" pulumi-lang-yaml="`secret`" pulumi-lang-java="`secret`">`secret`</span>.
     */
    readonly sslCertificateAuthority: pulumi.Output<outputs.ConnectionConfluentSchemaRegistrySslCertificateAuthority | undefined>;
    /**
     * The client key for the Confluent Schema Registry.
     */
    readonly sslKey: pulumi.Output<outputs.ConnectionConfluentSchemaRegistrySslKey | undefined>;
    /**
     * The URL of the Confluent Schema Registry.
     */
    readonly url: pulumi.Output<string>;
    /**
     * The username for the Confluent Schema Registry.. Can be supplied as either free text using <span pulumi-lang-nodejs="`text`" pulumi-lang-dotnet="`Text`" pulumi-lang-go="`text`" pulumi-lang-python="`text`" pulumi-lang-yaml="`text`" pulumi-lang-java="`text`">`text`</span> or reference to a secret object using <span pulumi-lang-nodejs="`secret`" pulumi-lang-dotnet="`Secret`" pulumi-lang-go="`secret`" pulumi-lang-python="`secret`" pulumi-lang-yaml="`secret`" pulumi-lang-java="`secret`">`secret`</span>.
     */
    readonly username: pulumi.Output<outputs.ConnectionConfluentSchemaRegistryUsername | undefined>;
    /**
     * If the connection should wait for validation.
     */
    readonly validate: pulumi.Output<boolean | undefined>;
    /**
     * Create a ConnectionConfluentSchemaRegistry resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectionConfluentSchemaRegistryArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ConnectionConfluentSchemaRegistry resources.
 */
export interface ConnectionConfluentSchemaRegistryState {
    /**
     * The AWS PrivateLink configuration for the Confluent Schema Registry.
     */
    awsPrivatelink?: pulumi.Input<inputs.ConnectionConfluentSchemaRegistryAwsPrivatelink>;
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    connectionConfluentSchemaRegistryId?: pulumi.Input<string>;
    /**
     * The identifier for the connection database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or <span pulumi-lang-nodejs="`materialize`" pulumi-lang-dotnet="`Materialize`" pulumi-lang-go="`materialize`" pulumi-lang-python="`materialize`" pulumi-lang-yaml="`materialize`" pulumi-lang-java="`materialize`">`materialize`</span> if environment variable is not set.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The identifier for the connection.
     */
    name?: pulumi.Input<string>;
    /**
     * The owernship role of the object.
     */
    ownershipRole?: pulumi.Input<string>;
    /**
     * The password for the Confluent Schema Registry.
     */
    password?: pulumi.Input<inputs.ConnectionConfluentSchemaRegistryPassword>;
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
     * The SSH tunnel configuration for the Confluent Schema Registry.
     */
    sshTunnel?: pulumi.Input<inputs.ConnectionConfluentSchemaRegistrySshTunnel>;
    /**
     * The client certificate for the Confluent Schema Registry.. Can be supplied as either free text using <span pulumi-lang-nodejs="`text`" pulumi-lang-dotnet="`Text`" pulumi-lang-go="`text`" pulumi-lang-python="`text`" pulumi-lang-yaml="`text`" pulumi-lang-java="`text`">`text`</span> or reference to a secret object using <span pulumi-lang-nodejs="`secret`" pulumi-lang-dotnet="`Secret`" pulumi-lang-go="`secret`" pulumi-lang-python="`secret`" pulumi-lang-yaml="`secret`" pulumi-lang-java="`secret`">`secret`</span>.
     */
    sslCertificate?: pulumi.Input<inputs.ConnectionConfluentSchemaRegistrySslCertificate>;
    /**
     * The CA certificate for the Confluent Schema Registry.. Can be supplied as either free text using <span pulumi-lang-nodejs="`text`" pulumi-lang-dotnet="`Text`" pulumi-lang-go="`text`" pulumi-lang-python="`text`" pulumi-lang-yaml="`text`" pulumi-lang-java="`text`">`text`</span> or reference to a secret object using <span pulumi-lang-nodejs="`secret`" pulumi-lang-dotnet="`Secret`" pulumi-lang-go="`secret`" pulumi-lang-python="`secret`" pulumi-lang-yaml="`secret`" pulumi-lang-java="`secret`">`secret`</span>.
     */
    sslCertificateAuthority?: pulumi.Input<inputs.ConnectionConfluentSchemaRegistrySslCertificateAuthority>;
    /**
     * The client key for the Confluent Schema Registry.
     */
    sslKey?: pulumi.Input<inputs.ConnectionConfluentSchemaRegistrySslKey>;
    /**
     * The URL of the Confluent Schema Registry.
     */
    url?: pulumi.Input<string>;
    /**
     * The username for the Confluent Schema Registry.. Can be supplied as either free text using <span pulumi-lang-nodejs="`text`" pulumi-lang-dotnet="`Text`" pulumi-lang-go="`text`" pulumi-lang-python="`text`" pulumi-lang-yaml="`text`" pulumi-lang-java="`text`">`text`</span> or reference to a secret object using <span pulumi-lang-nodejs="`secret`" pulumi-lang-dotnet="`Secret`" pulumi-lang-go="`secret`" pulumi-lang-python="`secret`" pulumi-lang-yaml="`secret`" pulumi-lang-java="`secret`">`secret`</span>.
     */
    username?: pulumi.Input<inputs.ConnectionConfluentSchemaRegistryUsername>;
    /**
     * If the connection should wait for validation.
     */
    validate?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a ConnectionConfluentSchemaRegistry resource.
 */
export interface ConnectionConfluentSchemaRegistryArgs {
    /**
     * The AWS PrivateLink configuration for the Confluent Schema Registry.
     */
    awsPrivatelink?: pulumi.Input<inputs.ConnectionConfluentSchemaRegistryAwsPrivatelink>;
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    connectionConfluentSchemaRegistryId?: pulumi.Input<string>;
    /**
     * The identifier for the connection database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or <span pulumi-lang-nodejs="`materialize`" pulumi-lang-dotnet="`Materialize`" pulumi-lang-go="`materialize`" pulumi-lang-python="`materialize`" pulumi-lang-yaml="`materialize`" pulumi-lang-java="`materialize`">`materialize`</span> if environment variable is not set.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The identifier for the connection.
     */
    name?: pulumi.Input<string>;
    /**
     * The owernship role of the object.
     */
    ownershipRole?: pulumi.Input<string>;
    /**
     * The password for the Confluent Schema Registry.
     */
    password?: pulumi.Input<inputs.ConnectionConfluentSchemaRegistryPassword>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The identifier for the connection schema in Materialize. Defaults to <span pulumi-lang-nodejs="`public`" pulumi-lang-dotnet="`Public`" pulumi-lang-go="`public`" pulumi-lang-python="`public`" pulumi-lang-yaml="`public`" pulumi-lang-java="`public`">`public`</span>.
     */
    schemaName?: pulumi.Input<string>;
    /**
     * The SSH tunnel configuration for the Confluent Schema Registry.
     */
    sshTunnel?: pulumi.Input<inputs.ConnectionConfluentSchemaRegistrySshTunnel>;
    /**
     * The client certificate for the Confluent Schema Registry.. Can be supplied as either free text using <span pulumi-lang-nodejs="`text`" pulumi-lang-dotnet="`Text`" pulumi-lang-go="`text`" pulumi-lang-python="`text`" pulumi-lang-yaml="`text`" pulumi-lang-java="`text`">`text`</span> or reference to a secret object using <span pulumi-lang-nodejs="`secret`" pulumi-lang-dotnet="`Secret`" pulumi-lang-go="`secret`" pulumi-lang-python="`secret`" pulumi-lang-yaml="`secret`" pulumi-lang-java="`secret`">`secret`</span>.
     */
    sslCertificate?: pulumi.Input<inputs.ConnectionConfluentSchemaRegistrySslCertificate>;
    /**
     * The CA certificate for the Confluent Schema Registry.. Can be supplied as either free text using <span pulumi-lang-nodejs="`text`" pulumi-lang-dotnet="`Text`" pulumi-lang-go="`text`" pulumi-lang-python="`text`" pulumi-lang-yaml="`text`" pulumi-lang-java="`text`">`text`</span> or reference to a secret object using <span pulumi-lang-nodejs="`secret`" pulumi-lang-dotnet="`Secret`" pulumi-lang-go="`secret`" pulumi-lang-python="`secret`" pulumi-lang-yaml="`secret`" pulumi-lang-java="`secret`">`secret`</span>.
     */
    sslCertificateAuthority?: pulumi.Input<inputs.ConnectionConfluentSchemaRegistrySslCertificateAuthority>;
    /**
     * The client key for the Confluent Schema Registry.
     */
    sslKey?: pulumi.Input<inputs.ConnectionConfluentSchemaRegistrySslKey>;
    /**
     * The URL of the Confluent Schema Registry.
     */
    url: pulumi.Input<string>;
    /**
     * The username for the Confluent Schema Registry.. Can be supplied as either free text using <span pulumi-lang-nodejs="`text`" pulumi-lang-dotnet="`Text`" pulumi-lang-go="`text`" pulumi-lang-python="`text`" pulumi-lang-yaml="`text`" pulumi-lang-java="`text`">`text`</span> or reference to a secret object using <span pulumi-lang-nodejs="`secret`" pulumi-lang-dotnet="`Secret`" pulumi-lang-go="`secret`" pulumi-lang-python="`secret`" pulumi-lang-yaml="`secret`" pulumi-lang-java="`secret`">`secret`</span>.
     */
    username?: pulumi.Input<inputs.ConnectionConfluentSchemaRegistryUsername>;
    /**
     * If the connection should wait for validation.
     */
    validate?: pulumi.Input<boolean>;
}
