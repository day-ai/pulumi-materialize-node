import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class SourceKafka extends pulumi.CustomResource {
    /**
     * Get an existing SourceKafka resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SourceKafkaState, opts?: pulumi.CustomResourceOptions): SourceKafka;
    /**
     * Returns true if the given object is an instance of SourceKafka.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SourceKafka;
    /**
     * The cluster to maintain this source.
     */
    readonly clusterName: pulumi.Output<string>;
    /**
     * Comment on an object in the database.
     */
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * The identifier for the source database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or <span pulumi-lang-nodejs="`materialize`" pulumi-lang-dotnet="`Materialize`" pulumi-lang-go="`materialize`" pulumi-lang-python="`materialize`" pulumi-lang-yaml="`materialize`" pulumi-lang-java="`materialize`">`materialize`</span> if environment variable is not set.
     */
    readonly databaseName: pulumi.Output<string | undefined>;
    /**
     * How Materialize should interpret records (e.g. append-only, upsert)..
     */
    readonly envelope: pulumi.Output<outputs.SourceKafkaEnvelope | undefined>;
    /**
     * The name of the progress collection for the source. If this is not specified, the collection will be named `<src_name>_progress`.
     */
    readonly exposeProgress: pulumi.Output<outputs.SourceKafkaExposeProgress | undefined>;
    /**
     * How to decode raw bytes from different formats into data structures Materialize can understand at runtime.
     */
    readonly format: pulumi.Output<outputs.SourceKafkaFormat | undefined>;
    /**
     * Include message headers.
     */
    readonly includeHeaders: pulumi.Output<boolean | undefined>;
    /**
     * Provide an alias for the headers column.
     */
    readonly includeHeadersAlias: pulumi.Output<string | undefined>;
    /**
     * Include a column containing the Kafka message key.
     */
    readonly includeKey: pulumi.Output<boolean | undefined>;
    /**
     * Provide an alias for the key column.
     */
    readonly includeKeyAlias: pulumi.Output<string | undefined>;
    /**
     * Include an offset column containing the Kafka message offset.
     */
    readonly includeOffset: pulumi.Output<boolean | undefined>;
    /**
     * Provide an alias for the offset column.
     */
    readonly includeOffsetAlias: pulumi.Output<string | undefined>;
    /**
     * Include a partition column containing the Kafka message partition
     */
    readonly includePartition: pulumi.Output<boolean | undefined>;
    /**
     * Provide an alias for the partition column.
     */
    readonly includePartitionAlias: pulumi.Output<string | undefined>;
    /**
     * Include a timestamp column containing the Kafka message timestamp.
     */
    readonly includeTimestamp: pulumi.Output<boolean | undefined>;
    /**
     * Provide an alias for the timestamp column.
     */
    readonly includeTimestampAlias: pulumi.Output<string | undefined>;
    /**
     * The Kafka connection to use in the source.
     */
    readonly kafkaConnection: pulumi.Output<outputs.SourceKafkaKafkaConnection>;
    /**
     * Set the key format explicitly.
     */
    readonly keyFormat: pulumi.Output<outputs.SourceKafkaKeyFormat | undefined>;
    /**
     * The identifier for the source.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The owernship role of the object.
     */
    readonly ownershipRole: pulumi.Output<string>;
    /**
     * The fully qualified name of the source.
     */
    readonly qualifiedSqlName: pulumi.Output<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    readonly region: pulumi.Output<string>;
    /**
     * The identifier for the source schema in Materialize. Defaults to <span pulumi-lang-nodejs="`public`" pulumi-lang-dotnet="`Public`" pulumi-lang-go="`public`" pulumi-lang-python="`public`" pulumi-lang-yaml="`public`" pulumi-lang-java="`public`">`public`</span>.
     */
    readonly schemaName: pulumi.Output<string | undefined>;
    /**
     * The size of the cluster maintaining this source.
     */
    readonly size: pulumi.Output<string>;
    readonly sourceKafkaId: pulumi.Output<string>;
    /**
     * Read partitions from the specified offset.
     */
    readonly startOffsets: pulumi.Output<number[] | undefined>;
    /**
     * Use the specified value to set `START OFFSET` based on the Kafka timestamp.
     */
    readonly startTimestamp: pulumi.Output<number | undefined>;
    /**
     * The Kafka topic you want to subscribe to.
     */
    readonly topic: pulumi.Output<string>;
    /**
     * Set the value format explicitly.
     */
    readonly valueFormat: pulumi.Output<outputs.SourceKafkaValueFormat | undefined>;
    /**
     * Create a SourceKafka resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SourceKafkaArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SourceKafka resources.
 */
export interface SourceKafkaState {
    /**
     * The cluster to maintain this source.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    /**
     * The identifier for the source database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or <span pulumi-lang-nodejs="`materialize`" pulumi-lang-dotnet="`Materialize`" pulumi-lang-go="`materialize`" pulumi-lang-python="`materialize`" pulumi-lang-yaml="`materialize`" pulumi-lang-java="`materialize`">`materialize`</span> if environment variable is not set.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * How Materialize should interpret records (e.g. append-only, upsert)..
     */
    envelope?: pulumi.Input<inputs.SourceKafkaEnvelope>;
    /**
     * The name of the progress collection for the source. If this is not specified, the collection will be named `<src_name>_progress`.
     */
    exposeProgress?: pulumi.Input<inputs.SourceKafkaExposeProgress>;
    /**
     * How to decode raw bytes from different formats into data structures Materialize can understand at runtime.
     */
    format?: pulumi.Input<inputs.SourceKafkaFormat>;
    /**
     * Include message headers.
     */
    includeHeaders?: pulumi.Input<boolean>;
    /**
     * Provide an alias for the headers column.
     */
    includeHeadersAlias?: pulumi.Input<string>;
    /**
     * Include a column containing the Kafka message key.
     */
    includeKey?: pulumi.Input<boolean>;
    /**
     * Provide an alias for the key column.
     */
    includeKeyAlias?: pulumi.Input<string>;
    /**
     * Include an offset column containing the Kafka message offset.
     */
    includeOffset?: pulumi.Input<boolean>;
    /**
     * Provide an alias for the offset column.
     */
    includeOffsetAlias?: pulumi.Input<string>;
    /**
     * Include a partition column containing the Kafka message partition
     */
    includePartition?: pulumi.Input<boolean>;
    /**
     * Provide an alias for the partition column.
     */
    includePartitionAlias?: pulumi.Input<string>;
    /**
     * Include a timestamp column containing the Kafka message timestamp.
     */
    includeTimestamp?: pulumi.Input<boolean>;
    /**
     * Provide an alias for the timestamp column.
     */
    includeTimestampAlias?: pulumi.Input<string>;
    /**
     * The Kafka connection to use in the source.
     */
    kafkaConnection?: pulumi.Input<inputs.SourceKafkaKafkaConnection>;
    /**
     * Set the key format explicitly.
     */
    keyFormat?: pulumi.Input<inputs.SourceKafkaKeyFormat>;
    /**
     * The identifier for the source.
     */
    name?: pulumi.Input<string>;
    /**
     * The owernship role of the object.
     */
    ownershipRole?: pulumi.Input<string>;
    /**
     * The fully qualified name of the source.
     */
    qualifiedSqlName?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The identifier for the source schema in Materialize. Defaults to <span pulumi-lang-nodejs="`public`" pulumi-lang-dotnet="`Public`" pulumi-lang-go="`public`" pulumi-lang-python="`public`" pulumi-lang-yaml="`public`" pulumi-lang-java="`public`">`public`</span>.
     */
    schemaName?: pulumi.Input<string>;
    /**
     * The size of the cluster maintaining this source.
     */
    size?: pulumi.Input<string>;
    sourceKafkaId?: pulumi.Input<string>;
    /**
     * Read partitions from the specified offset.
     */
    startOffsets?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Use the specified value to set `START OFFSET` based on the Kafka timestamp.
     */
    startTimestamp?: pulumi.Input<number>;
    /**
     * The Kafka topic you want to subscribe to.
     */
    topic?: pulumi.Input<string>;
    /**
     * Set the value format explicitly.
     */
    valueFormat?: pulumi.Input<inputs.SourceKafkaValueFormat>;
}
/**
 * The set of arguments for constructing a SourceKafka resource.
 */
export interface SourceKafkaArgs {
    /**
     * The cluster to maintain this source.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    /**
     * The identifier for the source database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or <span pulumi-lang-nodejs="`materialize`" pulumi-lang-dotnet="`Materialize`" pulumi-lang-go="`materialize`" pulumi-lang-python="`materialize`" pulumi-lang-yaml="`materialize`" pulumi-lang-java="`materialize`">`materialize`</span> if environment variable is not set.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * How Materialize should interpret records (e.g. append-only, upsert)..
     */
    envelope?: pulumi.Input<inputs.SourceKafkaEnvelope>;
    /**
     * The name of the progress collection for the source. If this is not specified, the collection will be named `<src_name>_progress`.
     */
    exposeProgress?: pulumi.Input<inputs.SourceKafkaExposeProgress>;
    /**
     * How to decode raw bytes from different formats into data structures Materialize can understand at runtime.
     */
    format?: pulumi.Input<inputs.SourceKafkaFormat>;
    /**
     * Include message headers.
     */
    includeHeaders?: pulumi.Input<boolean>;
    /**
     * Provide an alias for the headers column.
     */
    includeHeadersAlias?: pulumi.Input<string>;
    /**
     * Include a column containing the Kafka message key.
     */
    includeKey?: pulumi.Input<boolean>;
    /**
     * Provide an alias for the key column.
     */
    includeKeyAlias?: pulumi.Input<string>;
    /**
     * Include an offset column containing the Kafka message offset.
     */
    includeOffset?: pulumi.Input<boolean>;
    /**
     * Provide an alias for the offset column.
     */
    includeOffsetAlias?: pulumi.Input<string>;
    /**
     * Include a partition column containing the Kafka message partition
     */
    includePartition?: pulumi.Input<boolean>;
    /**
     * Provide an alias for the partition column.
     */
    includePartitionAlias?: pulumi.Input<string>;
    /**
     * Include a timestamp column containing the Kafka message timestamp.
     */
    includeTimestamp?: pulumi.Input<boolean>;
    /**
     * Provide an alias for the timestamp column.
     */
    includeTimestampAlias?: pulumi.Input<string>;
    /**
     * The Kafka connection to use in the source.
     */
    kafkaConnection: pulumi.Input<inputs.SourceKafkaKafkaConnection>;
    /**
     * Set the key format explicitly.
     */
    keyFormat?: pulumi.Input<inputs.SourceKafkaKeyFormat>;
    /**
     * The identifier for the source.
     */
    name?: pulumi.Input<string>;
    /**
     * The owernship role of the object.
     */
    ownershipRole?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The identifier for the source schema in Materialize. Defaults to <span pulumi-lang-nodejs="`public`" pulumi-lang-dotnet="`Public`" pulumi-lang-go="`public`" pulumi-lang-python="`public`" pulumi-lang-yaml="`public`" pulumi-lang-java="`public`">`public`</span>.
     */
    schemaName?: pulumi.Input<string>;
    sourceKafkaId?: pulumi.Input<string>;
    /**
     * Read partitions from the specified offset.
     */
    startOffsets?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Use the specified value to set `START OFFSET` based on the Kafka timestamp.
     */
    startTimestamp?: pulumi.Input<number>;
    /**
     * The Kafka topic you want to subscribe to.
     */
    topic: pulumi.Input<string>;
    /**
     * Set the value format explicitly.
     */
    valueFormat?: pulumi.Input<inputs.SourceKafkaValueFormat>;
}
