import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class ConnectionKafka extends pulumi.CustomResource {
    /**
     * Get an existing ConnectionKafka resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConnectionKafkaState, opts?: pulumi.CustomResourceOptions): ConnectionKafka;
    /**
     * Returns true if the given object is an instance of ConnectionKafka.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ConnectionKafka;
    /**
     * The AWS connection to use for IAM authentication.
     */
    readonly awsConnection: pulumi.Output<outputs.ConnectionKafkaAwsConnection | undefined>;
    /**
     * AWS PrivateLink configuration. Conflicts with <span pulumi-lang-nodejs="`kafkaBroker`" pulumi-lang-dotnet="`KafkaBroker`" pulumi-lang-go="`kafkaBroker`" pulumi-lang-python="`kafka_broker`" pulumi-lang-yaml="`kafkaBroker`" pulumi-lang-java="`kafkaBroker`">`kafka_broker`</span>.
     */
    readonly awsPrivatelink: pulumi.Output<outputs.ConnectionKafkaAwsPrivatelink | undefined>;
    /**
     * Comment on an object in the database.
     */
    readonly comment: pulumi.Output<string | undefined>;
    readonly connectionKafkaId: pulumi.Output<string>;
    /**
     * The identifier for the connection database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or <span pulumi-lang-nodejs="`materialize`" pulumi-lang-dotnet="`Materialize`" pulumi-lang-go="`materialize`" pulumi-lang-python="`materialize`" pulumi-lang-yaml="`materialize`" pulumi-lang-java="`materialize`">`materialize`</span> if environment variable is not set.
     */
    readonly databaseName: pulumi.Output<string | undefined>;
    /**
     * The Kafka broker's configuration.
     */
    readonly kafkaBrokers: pulumi.Output<outputs.ConnectionKafkaKafkaBroker[] | undefined>;
    /**
     * The identifier for the connection.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The owernship role of the object.
     */
    readonly ownershipRole: pulumi.Output<string>;
    /**
     * The name of a topic that Kafka sinks can use to track internal consistency metadata.
     */
    readonly progressTopic: pulumi.Output<string | undefined>;
    /**
     * The replication factor to use when creating the Kafka progress topic (if the Kafka topic does not already exist).
     */
    readonly progressTopicReplicationFactor: pulumi.Output<number | undefined>;
    /**
     * The fully qualified name of the connection.
     */
    readonly qualifiedSqlName: pulumi.Output<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    readonly region: pulumi.Output<string>;
    /**
     * The SASL mechanism for the Kafka broker.
     */
    readonly saslMechanisms: pulumi.Output<string | undefined>;
    /**
     * The SASL password for the Kafka broker.
     */
    readonly saslPassword: pulumi.Output<outputs.ConnectionKafkaSaslPassword | undefined>;
    /**
     * The SASL username for the Kafka broker.. Can be supplied as either free text using <span pulumi-lang-nodejs="`text`" pulumi-lang-dotnet="`Text`" pulumi-lang-go="`text`" pulumi-lang-python="`text`" pulumi-lang-yaml="`text`" pulumi-lang-java="`text`">`text`</span> or reference to a secret object using <span pulumi-lang-nodejs="`secret`" pulumi-lang-dotnet="`Secret`" pulumi-lang-go="`secret`" pulumi-lang-python="`secret`" pulumi-lang-yaml="`secret`" pulumi-lang-java="`secret`">`secret`</span>.
     */
    readonly saslUsername: pulumi.Output<outputs.ConnectionKafkaSaslUsername | undefined>;
    /**
     * The identifier for the connection schema in Materialize. Defaults to <span pulumi-lang-nodejs="`public`" pulumi-lang-dotnet="`Public`" pulumi-lang-go="`public`" pulumi-lang-python="`public`" pulumi-lang-yaml="`public`" pulumi-lang-java="`public`">`public`</span>.
     */
    readonly schemaName: pulumi.Output<string | undefined>;
    /**
     * The security protocol to use: `PLAINTEXT`, `SSL`, `SASL_PLAINTEXT`, or `SASL_SSL`.
     */
    readonly securityProtocol: pulumi.Output<string | undefined>;
    /**
     * The default SSH tunnel configuration for the Kafka brokers.
     */
    readonly sshTunnel: pulumi.Output<outputs.ConnectionKafkaSshTunnel | undefined>;
    /**
     * The client certificate for the Kafka broker.. Can be supplied as either free text using <span pulumi-lang-nodejs="`text`" pulumi-lang-dotnet="`Text`" pulumi-lang-go="`text`" pulumi-lang-python="`text`" pulumi-lang-yaml="`text`" pulumi-lang-java="`text`">`text`</span> or reference to a secret object using <span pulumi-lang-nodejs="`secret`" pulumi-lang-dotnet="`Secret`" pulumi-lang-go="`secret`" pulumi-lang-python="`secret`" pulumi-lang-yaml="`secret`" pulumi-lang-java="`secret`">`secret`</span>.
     */
    readonly sslCertificate: pulumi.Output<outputs.ConnectionKafkaSslCertificate | undefined>;
    /**
     * The CA certificate for the Kafka broker.. Can be supplied as either free text using <span pulumi-lang-nodejs="`text`" pulumi-lang-dotnet="`Text`" pulumi-lang-go="`text`" pulumi-lang-python="`text`" pulumi-lang-yaml="`text`" pulumi-lang-java="`text`">`text`</span> or reference to a secret object using <span pulumi-lang-nodejs="`secret`" pulumi-lang-dotnet="`Secret`" pulumi-lang-go="`secret`" pulumi-lang-python="`secret`" pulumi-lang-yaml="`secret`" pulumi-lang-java="`secret`">`secret`</span>.
     */
    readonly sslCertificateAuthority: pulumi.Output<outputs.ConnectionKafkaSslCertificateAuthority | undefined>;
    /**
     * The client key for the Kafka broker.
     */
    readonly sslKey: pulumi.Output<outputs.ConnectionKafkaSslKey | undefined>;
    /**
     * If the connection should wait for validation.
     */
    readonly validate: pulumi.Output<boolean | undefined>;
    /**
     * Create a ConnectionKafka resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ConnectionKafkaArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ConnectionKafka resources.
 */
export interface ConnectionKafkaState {
    /**
     * The AWS connection to use for IAM authentication.
     */
    awsConnection?: pulumi.Input<inputs.ConnectionKafkaAwsConnection>;
    /**
     * AWS PrivateLink configuration. Conflicts with <span pulumi-lang-nodejs="`kafkaBroker`" pulumi-lang-dotnet="`KafkaBroker`" pulumi-lang-go="`kafkaBroker`" pulumi-lang-python="`kafka_broker`" pulumi-lang-yaml="`kafkaBroker`" pulumi-lang-java="`kafkaBroker`">`kafka_broker`</span>.
     */
    awsPrivatelink?: pulumi.Input<inputs.ConnectionKafkaAwsPrivatelink>;
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    connectionKafkaId?: pulumi.Input<string>;
    /**
     * The identifier for the connection database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or <span pulumi-lang-nodejs="`materialize`" pulumi-lang-dotnet="`Materialize`" pulumi-lang-go="`materialize`" pulumi-lang-python="`materialize`" pulumi-lang-yaml="`materialize`" pulumi-lang-java="`materialize`">`materialize`</span> if environment variable is not set.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The Kafka broker's configuration.
     */
    kafkaBrokers?: pulumi.Input<pulumi.Input<inputs.ConnectionKafkaKafkaBroker>[]>;
    /**
     * The identifier for the connection.
     */
    name?: pulumi.Input<string>;
    /**
     * The owernship role of the object.
     */
    ownershipRole?: pulumi.Input<string>;
    /**
     * The name of a topic that Kafka sinks can use to track internal consistency metadata.
     */
    progressTopic?: pulumi.Input<string>;
    /**
     * The replication factor to use when creating the Kafka progress topic (if the Kafka topic does not already exist).
     */
    progressTopicReplicationFactor?: pulumi.Input<number>;
    /**
     * The fully qualified name of the connection.
     */
    qualifiedSqlName?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The SASL mechanism for the Kafka broker.
     */
    saslMechanisms?: pulumi.Input<string>;
    /**
     * The SASL password for the Kafka broker.
     */
    saslPassword?: pulumi.Input<inputs.ConnectionKafkaSaslPassword>;
    /**
     * The SASL username for the Kafka broker.. Can be supplied as either free text using <span pulumi-lang-nodejs="`text`" pulumi-lang-dotnet="`Text`" pulumi-lang-go="`text`" pulumi-lang-python="`text`" pulumi-lang-yaml="`text`" pulumi-lang-java="`text`">`text`</span> or reference to a secret object using <span pulumi-lang-nodejs="`secret`" pulumi-lang-dotnet="`Secret`" pulumi-lang-go="`secret`" pulumi-lang-python="`secret`" pulumi-lang-yaml="`secret`" pulumi-lang-java="`secret`">`secret`</span>.
     */
    saslUsername?: pulumi.Input<inputs.ConnectionKafkaSaslUsername>;
    /**
     * The identifier for the connection schema in Materialize. Defaults to <span pulumi-lang-nodejs="`public`" pulumi-lang-dotnet="`Public`" pulumi-lang-go="`public`" pulumi-lang-python="`public`" pulumi-lang-yaml="`public`" pulumi-lang-java="`public`">`public`</span>.
     */
    schemaName?: pulumi.Input<string>;
    /**
     * The security protocol to use: `PLAINTEXT`, `SSL`, `SASL_PLAINTEXT`, or `SASL_SSL`.
     */
    securityProtocol?: pulumi.Input<string>;
    /**
     * The default SSH tunnel configuration for the Kafka brokers.
     */
    sshTunnel?: pulumi.Input<inputs.ConnectionKafkaSshTunnel>;
    /**
     * The client certificate for the Kafka broker.. Can be supplied as either free text using <span pulumi-lang-nodejs="`text`" pulumi-lang-dotnet="`Text`" pulumi-lang-go="`text`" pulumi-lang-python="`text`" pulumi-lang-yaml="`text`" pulumi-lang-java="`text`">`text`</span> or reference to a secret object using <span pulumi-lang-nodejs="`secret`" pulumi-lang-dotnet="`Secret`" pulumi-lang-go="`secret`" pulumi-lang-python="`secret`" pulumi-lang-yaml="`secret`" pulumi-lang-java="`secret`">`secret`</span>.
     */
    sslCertificate?: pulumi.Input<inputs.ConnectionKafkaSslCertificate>;
    /**
     * The CA certificate for the Kafka broker.. Can be supplied as either free text using <span pulumi-lang-nodejs="`text`" pulumi-lang-dotnet="`Text`" pulumi-lang-go="`text`" pulumi-lang-python="`text`" pulumi-lang-yaml="`text`" pulumi-lang-java="`text`">`text`</span> or reference to a secret object using <span pulumi-lang-nodejs="`secret`" pulumi-lang-dotnet="`Secret`" pulumi-lang-go="`secret`" pulumi-lang-python="`secret`" pulumi-lang-yaml="`secret`" pulumi-lang-java="`secret`">`secret`</span>.
     */
    sslCertificateAuthority?: pulumi.Input<inputs.ConnectionKafkaSslCertificateAuthority>;
    /**
     * The client key for the Kafka broker.
     */
    sslKey?: pulumi.Input<inputs.ConnectionKafkaSslKey>;
    /**
     * If the connection should wait for validation.
     */
    validate?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a ConnectionKafka resource.
 */
export interface ConnectionKafkaArgs {
    /**
     * The AWS connection to use for IAM authentication.
     */
    awsConnection?: pulumi.Input<inputs.ConnectionKafkaAwsConnection>;
    /**
     * AWS PrivateLink configuration. Conflicts with <span pulumi-lang-nodejs="`kafkaBroker`" pulumi-lang-dotnet="`KafkaBroker`" pulumi-lang-go="`kafkaBroker`" pulumi-lang-python="`kafka_broker`" pulumi-lang-yaml="`kafkaBroker`" pulumi-lang-java="`kafkaBroker`">`kafka_broker`</span>.
     */
    awsPrivatelink?: pulumi.Input<inputs.ConnectionKafkaAwsPrivatelink>;
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    connectionKafkaId?: pulumi.Input<string>;
    /**
     * The identifier for the connection database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or <span pulumi-lang-nodejs="`materialize`" pulumi-lang-dotnet="`Materialize`" pulumi-lang-go="`materialize`" pulumi-lang-python="`materialize`" pulumi-lang-yaml="`materialize`" pulumi-lang-java="`materialize`">`materialize`</span> if environment variable is not set.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The Kafka broker's configuration.
     */
    kafkaBrokers?: pulumi.Input<pulumi.Input<inputs.ConnectionKafkaKafkaBroker>[]>;
    /**
     * The identifier for the connection.
     */
    name?: pulumi.Input<string>;
    /**
     * The owernship role of the object.
     */
    ownershipRole?: pulumi.Input<string>;
    /**
     * The name of a topic that Kafka sinks can use to track internal consistency metadata.
     */
    progressTopic?: pulumi.Input<string>;
    /**
     * The replication factor to use when creating the Kafka progress topic (if the Kafka topic does not already exist).
     */
    progressTopicReplicationFactor?: pulumi.Input<number>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The SASL mechanism for the Kafka broker.
     */
    saslMechanisms?: pulumi.Input<string>;
    /**
     * The SASL password for the Kafka broker.
     */
    saslPassword?: pulumi.Input<inputs.ConnectionKafkaSaslPassword>;
    /**
     * The SASL username for the Kafka broker.. Can be supplied as either free text using <span pulumi-lang-nodejs="`text`" pulumi-lang-dotnet="`Text`" pulumi-lang-go="`text`" pulumi-lang-python="`text`" pulumi-lang-yaml="`text`" pulumi-lang-java="`text`">`text`</span> or reference to a secret object using <span pulumi-lang-nodejs="`secret`" pulumi-lang-dotnet="`Secret`" pulumi-lang-go="`secret`" pulumi-lang-python="`secret`" pulumi-lang-yaml="`secret`" pulumi-lang-java="`secret`">`secret`</span>.
     */
    saslUsername?: pulumi.Input<inputs.ConnectionKafkaSaslUsername>;
    /**
     * The identifier for the connection schema in Materialize. Defaults to <span pulumi-lang-nodejs="`public`" pulumi-lang-dotnet="`Public`" pulumi-lang-go="`public`" pulumi-lang-python="`public`" pulumi-lang-yaml="`public`" pulumi-lang-java="`public`">`public`</span>.
     */
    schemaName?: pulumi.Input<string>;
    /**
     * The security protocol to use: `PLAINTEXT`, `SSL`, `SASL_PLAINTEXT`, or `SASL_SSL`.
     */
    securityProtocol?: pulumi.Input<string>;
    /**
     * The default SSH tunnel configuration for the Kafka brokers.
     */
    sshTunnel?: pulumi.Input<inputs.ConnectionKafkaSshTunnel>;
    /**
     * The client certificate for the Kafka broker.. Can be supplied as either free text using <span pulumi-lang-nodejs="`text`" pulumi-lang-dotnet="`Text`" pulumi-lang-go="`text`" pulumi-lang-python="`text`" pulumi-lang-yaml="`text`" pulumi-lang-java="`text`">`text`</span> or reference to a secret object using <span pulumi-lang-nodejs="`secret`" pulumi-lang-dotnet="`Secret`" pulumi-lang-go="`secret`" pulumi-lang-python="`secret`" pulumi-lang-yaml="`secret`" pulumi-lang-java="`secret`">`secret`</span>.
     */
    sslCertificate?: pulumi.Input<inputs.ConnectionKafkaSslCertificate>;
    /**
     * The CA certificate for the Kafka broker.. Can be supplied as either free text using <span pulumi-lang-nodejs="`text`" pulumi-lang-dotnet="`Text`" pulumi-lang-go="`text`" pulumi-lang-python="`text`" pulumi-lang-yaml="`text`" pulumi-lang-java="`text`">`text`</span> or reference to a secret object using <span pulumi-lang-nodejs="`secret`" pulumi-lang-dotnet="`Secret`" pulumi-lang-go="`secret`" pulumi-lang-python="`secret`" pulumi-lang-yaml="`secret`" pulumi-lang-java="`secret`">`secret`</span>.
     */
    sslCertificateAuthority?: pulumi.Input<inputs.ConnectionKafkaSslCertificateAuthority>;
    /**
     * The client key for the Kafka broker.
     */
    sslKey?: pulumi.Input<inputs.ConnectionKafkaSslKey>;
    /**
     * If the connection should wait for validation.
     */
    validate?: pulumi.Input<boolean>;
}
