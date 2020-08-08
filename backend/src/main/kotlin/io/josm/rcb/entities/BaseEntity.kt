package io.josm.rcb.entities

import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import org.springframework.data.util.ProxyUtils
import java.time.LocalDateTime
import javax.persistence.*


@MappedSuperclass
abstract class BaseEntity<T> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: T? = null

    @CreatedDate
    @Column(nullable = false, updatable = false)
    lateinit var created: LocalDateTime

    @LastModifiedDate
    @Column(nullable = false)
    lateinit var updated: LocalDateTime

    override fun equals(other: Any?): Boolean {
        other ?: return false
        if (this === other) return true
        if (javaClass != ProxyUtils.getUserClass(other)) return false
        other as BaseEntity<*>
        return this.id != null && this.id == other.id
    }

    override fun hashCode() = 31

    override fun toString(): String {
        return "BaseEntity(id=$id, created=$created, updated=$updated)"
    }
}